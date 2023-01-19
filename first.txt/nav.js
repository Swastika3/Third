<nav id="navbar">
    <ul>
    <script>
        var json = [    
                    {        
                "label": "Home",  
                  "link": "/home"  ,        
                    },
         {             
            "label": "About",    
                        "link": "/about" ,     
                              },  
                                        {    
                                                    "label": "Contact",         
                                                           "link": "/contact"   
                                                                    }        ];

        for (var i = 0; i < json.length; i++) {
            document.write('<li><a href="' + json[i].link + '">' + json[i].label + '</a></li>');
        }
    </script>
    </ul>
</nav>
