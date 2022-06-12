var canvas;
var classifier
function preload() {

}
function setup(){
    canvas=createCanvas(220,220)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/osRruU6By/model.json",
    function (){
        console.log("model loaded")
    })
}
function draw(){
    image(video,0,0,220,220)
    classifier.classify(video,find_object)
}
function find_object(error,object){
    if(error){
        console.log(error);
    }
    else{
        console.log(object);
        document.getElementById("object_result").innerHTML=object[0].label;
        document.getElementById("acurracy_result").innerHTML=object[0].confidence.toFixed(2);
    }
}