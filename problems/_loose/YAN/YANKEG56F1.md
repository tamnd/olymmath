---
tag: YANKEG56F1
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 8 items with different masses, each of which is an integer number of grams and does not exceed 15 grams. Xiao Ping wants to find the item with the greatest mass using the fewest number of weighings on a balance. He used the following method:
(1) Divide the 8 items into 2 groups, each with 4 items, and compare the masses of these 2 groups;
(2) Take the 4 items from the heavier group and divide them into 2 groups, each with 2 items, and compare their masses;
(3) Take the 2 items from the heavier group and divide them into 1 item each, and take the heavier one.
Xiao Ping did not get a balanced result on the balance in all 3 weighings, and finally obtained one item.
However, the item he found is actually the 5th heaviest among the 8 items.
Question: What is the mass of the item Xiao Ping found? And what is the mass of the second heaviest item?
