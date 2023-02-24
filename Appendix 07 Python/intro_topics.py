## GTG

a = 1 #int
print(type(a))
print(type(1.5)) #float
print(type("abc")) #str

# to remove unused variables
del a

# other types like list
l = [1, 2, 3]
print(l)
print(l[1]) #access individual elements
l.append(2)
print(l)
l.pop() #deletes the last element
l.append(1)
print(l)
l.clear() #to clear all the values
print(l)

del l

# tuples
t1 = (1, 2, "abc")
print(t1)
# t1.append(3) isnt possible 1: because it doesnt have that method, 2: tuples are immutable
print(t1.index("abc"))

del t1

# dictionaries
d = {"name": "Jacob", "age": 31}
d["job"] = "Programmer" #adding new key value pairs
print(d)
print(d.get("salary", "null")) #if key 'salary' isnt present, will return null
del d["age"]
print(d)

#both lists and dictionaries are mutable
d1 = d #they both point to the same value
d1["name"] = "Jesse"
print(d)
print(d1)
# similar plight with lists as both are immutable

#sets
s1 = {1, 2}
print(s1)
s1.add(3) # add elements to set
s1.add(4) # sets are mutable
s1.add(2) #duplicates wont affect set size
print(s1)
s1.remove(3) #delete elements from set
print(s1)
## TYJC
