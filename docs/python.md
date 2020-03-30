## Data type
list
tuple
set
dictionnary

## Helper

Will display the different function existing for the type
```python
my_var = ""

print(dir(type(my_var)))
```

## Number

Here is the way to create infinity in Python
```python
positif_inifinty = float("inf")
negatif_infinty = float("-inf")
```

## List

``` python
nums = []
```

``` python
nums = list()
```

Stack
``` python
nums = []
nums.append(1)
nums.append(2)
nums.append(3)

nums.pop()
nums.pop()
nums.pop()
```

Queue
``` python
nums = []
nums.insert(0, 1)
nums.insert(0, 2)
nums.insert(0, 3)

nums.pop()
nums.pop()
nums.pop()
```

Queue
``` python
nums = []
nums.append(1)
nums.append(2)
nums.append(3)

nums.pop(0)
nums.pop(0)
nums.pop(0)
```

Copy
```python
original_list = [1, 2, 3]
new_list = original_list.copy() # Python3
new_list = list(original_list)

import copy
new_list = copy.copy(original_list)
new_list = copy.deepcopy(original_list) # if contain object
new_list = original_list[:]
```

iteration through list:
```python
for i in range(len(nums)):
  print(nums[i])
```

```python
for i in nums:
  i
```

ex: init array
```python
[n * n for n in range(6) if n % 2 == 0]
```

## Set

```python
my_set = {1,}
my_set_2 = {e for e in list}
```

## Hash
```python
my_hash = {} 
```

iterate through the keys
```python
for k in my_hash.keys():
  print(k)
```

iterate through the values
```python
for v in my_hash.value():
  print(v)
```

iterate through the items
```python
for key, value in my_hash.items():
  print(v)
```

```python
[n: n * n for n in range(6)]
```
