from PIL import Image
import pytesseract

totalPrefix = ['grand total','amount','subtotal','grand amount']

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

#Store the data of receipt.jpg to a variable called image
image = Image.open("receipt.png")

#Using pytesseract library, convert image to a string (the core ocr function)
text = pytesseract.image_to_string(image, lang = 'eng').split('\n')

data = textToJSON(text)
for key in data :
    print(key,':',data[key])

