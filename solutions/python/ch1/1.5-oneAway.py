"""
One away

There are three types of edits that can be performed on strings: insert a character, remove a character or replace a character.
Given two strings, write a function to check if they are one edit (or zero edits) away.

eg:

pale, ple -> true
pales, pale -> true 
pale, bale -> true
pale, bake -> false
"""


def oneAway(str1, str2):

    #Check if we are zero edits away first as per question:
    if str1 == str2:
        return True

    #Case of if the first letter is not the same but the rest match - we're one away.
    if str1[0] != str2[0] and str1[1:] == str2[1:]:
        return True
    
    #Iterate over each character index. If we hit a different character, check to see if if everything after still matches
    for i in range(0, len(str1)-1):
        if str1[:i] != str2[:i]:
            if str1[i+1:] == str2[i:]:
                return True
            else:
                return False                    # If everything after doesn't match, we must be more than one away.
        elif len(str1) -1 == len(str2):         # This line is an edgecase to deal with if everything matches but one string has an extra character at the end
            return True
        else:
            return False

print(oneAway("pale","ple"))
print(oneAway("pales","pale"))
print(oneAway("pale","pale"))
print(oneAway("pale","bale"))
print(oneAway("pale","bake"))