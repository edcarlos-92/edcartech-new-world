import React from 'react'
import DOMPurify from "dompurify";


export default function DOMSanitize(props:any) {

    const {content} = props
    //const getTag = document.getElementsByTagName('pre');
    //const getHtmlData = Array.from(getTag).map(item => item.textContent);

    /*
    DOMPurify.addHook('uponSanitizeElement', function(node:any, data) {
        if (data.tagName === 'script') {
            var script = node.textContent;
            if (!script || 'src' in node.attributes
                || 'href' in node.attributes
                || 'xlink:href' in node.attributes) {
                    return node.parentNode.removeChild(node)
            }
            try {
                // Pass scripts to MentalJS
                var mental = MentalJS().parse(
                    {
                        options: {
                            eval: false,
                            dom:false
                        },
                     code:script
                    }
                );
                var scriptNode = document.createElement('script');
                scriptNode.appendChild(document.createTextNode(mental));
                document.head.appendChild(scriptNode);
                return node.parentNode.removeChild(node);
            } catch (e) {
                return node.parentNode.removeChild(node);
            }
        }
    });
*/


    // Add a hook to sanitize all allow-listed events with MentalJS
    /*
    DOMPurify.addHook('uponSanitizeAttribute', function(node, data) {
        if (data.attrName.match(/^on\w+/)) {
            var script = data.attrValue;
            try {
                // Pass scripts to MentalJS
                return data.attrValue = MentalJS().parse(
                    {
                        options: {
                            eval: false,
                            dom: false
                        },
                        code: script
                    }
                );
            } catch (e) {
                return data.attrValue = '';
            }
        }
    });
    */

    // Add a hook to convert all text to capitals
    DOMPurify.addHook('beforeSanitizeAttributes', function (node:any) {


          //const getTag = document.getElementsByTagName('pre');
          //const getHtmlData = Array.from(getTag).map(item => item.textContent);

        // Set text node content to uppercase
        //if (node.nodeName && node.nodeName === '#codeId') {

        if (node.tagName && node.tagName === 'pre') { 
        node.textContent = node.textContent.toUpperCase();
        console.log(`DOM Sanitize`,node.textContent);
        }
        else{
            console.log(`DOM Sanitize Not Found`);
        }
    });



function filter(dirty:any) {
  // allow script elements
  var config = {
      //ADD_TAGS: ['script'],
      //ADD_ATTR: ['onclick', 'onmouseover', 'onload', 'onunload','onerror']
  };
  // Clean HTML string and write into our DIV
  var clean = DOMPurify.sanitize(dirty, config);
  return clean;
}
    // document.getElementById('sanitized').innerHTML = filter(content);

    const finalRender = filter(content);

  return (
    <div>
        <span className="text-xl font-light" dangerouslySetInnerHTML={{ __html: finalRender}} />
    </div>
  )
}
