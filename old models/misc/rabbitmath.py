
def T(x):
    n = 0
    y = str(x)
    for i in range(len(y)):
        n += int(y[i])*int(y[i])
    if n ==1:
        return (1)
    elif n ==4:
        return (4)
    return T(n)

#for i in range(1,100):
    #print(f'{i} --> {T(i)}')

count1 = 0 
count4 = 0
for i in range(1,10000):
    if T(i) == 1:
        count1+=1
    elif T(i) == 4:
        count4+=1
print(f'{count1},{count4}')