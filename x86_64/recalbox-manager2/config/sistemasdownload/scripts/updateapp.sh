 #!/bin/bash
        
echo "fazendo Download da rom "

echo "Entrando na pasta : /recalbox/share/system/extractions"

cd /userdata/library/

echo "Removendo garbage"

rm -r *

echo "baixando conteudo"
wget -nc https://archive.org/download/packbatocera34pc/pack.zip

echo "Extraindo pacote"
unzip -o pack.zip
rm pack.zip

echo "Executando shell de instação"
sh /userdata/library/pack/instalacao.sh 


batocera-save-overlay

echo "Fim"
                                         
exit 0    
                                                                  