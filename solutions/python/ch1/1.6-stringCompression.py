"""
String Compression
Implement a method to perform basic string compression using the counts of repeated characters. 

For example, the string “aabcccccaaa” would become “a2b1c5a3”.

*If the compressed string would not become smaller that the original string, your method should return the original string.

You can assume the string only has uppercase and lowercase characters.


Initialize a counter at 0.
Initialize an empty output string “”

Iterate through each character & increment counter by 1 for each letter until:
    We reach a new letter. At this point, we change output string to the first instance of the letter we have and append the value of counter.
    We reset counter to 0.
    We move on to next letter. rinse and repeat.

Check if length of output is longer than or same length of original, if so, return original

Time Complexity: O(n)
Space Complexity O(1)




"""



def compression(str1):
    counter = 1
    output = ""

    for i in range(1, len(str1)):
        if str1[i] == str1[i-1]:
            counter += 1
        else: 
            output += str1[i-1] + str(counter)
            counter = 1
    
    # Due to ranging, we have to add on the last element after
    output = output + str1[-1] + str(counter)

    if len(output) >= len(str1):
        return str1
    
    return output




str1 = "aaaabcccdeff"
print(compression(str1))