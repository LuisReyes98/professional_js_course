/**
 * Esto hace que las declaraciones de variables constantes
 * de valor numerico deben estar en mayusculas
 */
export default function(context) {
  return {
    VariableDeclaration(node){
    	//console.log(node);
      //tipo de variable const
      if(node.kind === "const"){
      	const declaration = node.declarations[0];
        //asegurarnos que el valor es un numero
        if(typeof declaration.init.value === "number"){
        	if(declaration.id.name !== declaration.id.name.toUpperCase()){
            	context.report({
                	node: declaration.id,
                  	message: "el nombre de la constante debe estar en mayuscula",
                  	fix: function(fixer){
                    	return fixer.replaceText(declaration.id,declaration.id.name.toUpperCase() )
                    }
                })
            }
        }
      }
    }
  };
};
