// table data
$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": {
            "url": "../data/jsondata.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "title" },
            { "data": "topic" },
            { "data": "end_year" },
            { "data": "intensity" },
            { "data": "sector" },
            { "data": "region" },
            { "data": "pestle" }
        ]
    } );
} );
// graph



$(document).ready(function(){
    $.getJSON('../data/jsondata.json',function(data){
        var All_topics = '';
        $.each(data,function(key,value){
            All_topics = value.topic;
            var splt = All_topics.split("");
            console.log(splt);
            var myNewArray = [].concat.apply([], splt);
            
            

            
           
                  
            
        })
    })
})
// /*  */





// ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
let chartConfig = {
    type: 'wordcloud',
    options: {
        text: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some?There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        aspect: 'spiral',
        colorType: 'palette',
        ignore: ['establish', 'this'],
        maxItems: 50,
        minLength: '4px',
        palette: ['#D32F2F', '#1976D2', '#9E9E9E', '#E53935', '#1E88E5', '#7E57C2', '#F44336', '#2196F3', '#A1887F'],
        rotate: true,
        style: {
            tooltip: {
                text:'Frequncy %hits',
                padding: '5px',
                alpha: 0.9,
                backgroundColor: '#D32F2F',
                borderColor: 'none',
                borderRadius: '3px',
                fontColor: 'white',
                fontFamily: 'Georgia',
                textAlpha: 1,
                visible: true,
                width: '100px',
                wrapText: true
            },
            fontFamily: 'Merriweather',
            hoverState: {
                backgroundColor: '#1976D2',
                borderColor: 'none',
                borderRadius: '3px',
                fontColor: 'white'
            }
        }
    }
};

zingchart.render({
    id: 'myChart',
    data: chartConfig
});






