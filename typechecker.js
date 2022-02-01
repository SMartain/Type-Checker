const sentenceTag = document.querySelector(`input[type="text"]`)

const typeSizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector ("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// when i type in my sentence tag, update the output tag accordingly
// if there is no value, put in the orignal text

sentenceTag.addEventListener("keyup", function() {
  if (this.value){
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

// when i type in my output tag, update the sentence tag accordingly

outputTag.addEventListener("keyup", function (){
  sentenceTag.value = this.value
})

// when I change my typesize slider, update the text next to it and
// change the outputTag's size

typeSizeTag.addEventListener("input", function (){
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + "px"
})

lineheightTag.addEventListener("input", function (){
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

//when I change my italic checker, update the font style to normal or italic
italicTag.addEventListener("change", function (){
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})

//when i change my select for the typeface, update the font family
typefaceTag.addEventListener("input", function (){
  outputTag.style.fontFamily = this.value
})

//when i change my font weight slider, update accordingly
fontweightTag.addEventListener("input", function (){
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

// go through all of the color tags..
// when I click one of them, change the background color
// the text color and make this tag be selected

colorTags.forEach(tag => {
  tag.addEventListener("click", function (){
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    // reset the classes
    colorTags.forEach(tag => {
      tag.classList.remove("selected")
    })

    // only to this clicked one
    this.classList.add("selected")
  })
})
