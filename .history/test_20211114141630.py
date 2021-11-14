'''
Author: Albert Wang
#@LastAuthor       : Albert Wang
Date: 2021-10-21 20:57:50
#@LastTime         : 2021-11-14 14:08:47
Description:
#@FilePath         : /LiveStream/test.py
Copyright Notice:  2021 Albert Wang 王子睿.All Rights Reserved.
'''
def f(n):
    if n == 1:
        return 1
    elif n == 2:
        return 1
    else:
        return f(n-1) + f(n-2)

print(f(10))
