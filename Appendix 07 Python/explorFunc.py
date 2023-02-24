## GTG

def sum2(a, b):
  """
    Sums two integers and returns thier result
  """
  return (a + b)

def sumN(*args): #can sum n number of arguements
  total = sum(args)
  return (total)

def persInfo(**kwargs):
  print(kwargs)
  return "Name : " + kwargs.get("name") + ", Age : " + str(kwargs.get("age"))

print(sum2(2, 3))
print(sumN(2, 3, 2, 5, 4))
print(persInfo(name="Jacob", age=21))

## TYJC
