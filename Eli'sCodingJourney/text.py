import random
def generate(size):
  #generate unique numbers between 1 and the deck size (10, 100, 1000, 10000)
  shuffle1 = random.sample(range(1, size+1, 1), size)
  shuffle2 = random.sample(range(1, size+1, 1), size)
  fixed_points = sum(1 for i, num in enumerate(shuffle1, 1) if num == shuffle2[i-1])
  return fixed_points

results = []
def find(iterations):
  results = {}
  for i in range(1000):
      count = generate(iterations)
      if count in results:
            results[count] += 1
      else:
            results[count] = 1
     
  return results
  
for deck_size in [10, 100, 1000, 10000]:
    print(f"Deck of {deck_size} cards...1000 different selections")
    results = find(deck_size)
    print("Fixed points     Percentage")
    print("----------------------------")
    for count, percentage in sorted(results.items()):
        print(f"{count} {percentage/1000:20}")
    