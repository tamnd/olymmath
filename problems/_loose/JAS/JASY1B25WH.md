---
tag: JASY1B25WH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h485168
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71334
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
I call two people $A$ and $B$ and think of a natural number $n$ . Then I give the number $n$ to $A$ and the number $n+1$ to $B$ . I tell them that they have both been given natural numbers, and further that they are consecutive natural numbers. However, I don't tell $A$ what $B$ 's number is and vice versa. I start by asing $A$ if he knows $B$ 's number. He says "no", Then I ask $B$ if he knows $A$ 's number, and he says "no" too. I go back to $A$ and ask, and so on. $A$ and $B$ can both hear each other's responses. Do I ever get a "yes" in response? If so, who responds first with "yes" and how many times does he say "no" before this? Assume that both $A$ and $B$ are very intelligent and logical. You may need to consider multiple cases.
