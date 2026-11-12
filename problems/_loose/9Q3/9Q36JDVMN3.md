---
tag: 9Q36JDVMN3
kind: problem
type: answer
answer: "719"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a certain number of identical plastic bags that can be placed inside each other. If all the other bags end up inside one of the bags, we will call this situation a "bag of bags." Calculate the number of ways to form a "bag of bags" from 10 bags.

Explanation. Denote the bag with parentheses.

If we had one bag, there is only one way to form a "bag of bags": (). Two bags can also be arranged in only one way: (()).

Three bags can be arranged in two different ways: $(()())$ and $((()))$, and so on.

The order of the bags inside a bag does not matter. For example, the variant $(())())$ does not differ from $(()(()))$.
