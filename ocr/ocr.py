from PIL import Image
import pytesseract
import os

totalPrefix = ['grand total','amount','subtotal','grand amount']

#a function that filters important information form a list of strings
#and return a dictionary object
def textToJSON(text):
    i=0
    while(i<len(text)):
        if(text[i]==''):
            del text[i]
        else:
            i+=1
    data = {}
    data['Activity']=text[0]
    data['Address']=text[1]
    data['Location']=text[2]
    for i in text :
        for j in totalPrefix :
            if(len(i)>len(j) and i[0:len(j)].lower() == j) :
                data['Total Amount'] = i[len(j):]
                return data
    return data

#Opening a stream for file output
oStream = open("output.txt","a+")

#Test for different receipt sample
for filename in os.listdir('images'):
    
    #Store the data of receipt.jpg to a variable called image
    image = Image.open("images/"+filename)

    #Using pytesseract library, convert image to a string (the core ocr function)
    text = pytesseract.image_to_string(image, lang = 'eng').split('\n')

    data = textToJSON(text)

    output = ""

    for key in data :
        output += (key + ':' + data[key] + '\n')

    #Appending data to output file
    oStream.write(output+'\n')


oStream.close()
