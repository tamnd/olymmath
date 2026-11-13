---
tag: WR8PVJQAEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h386861
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54487
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2001
    source: hf-ai-mo-aops
    label: 2001 Romania Team Selection Test
---
Three schools have $200$ students each. Every student has at least one friend in each school (if the student $a$ is a friend of the student $b$ then $b$ is a friend of $a$ ).
It is known that there exists a set $E$ of $300$ students (among the $600$ ) such that for any school $S$ and any two students $x,y\in E$ but not in $S$ , the number of friends in $S$ of $x$ and $y$ are different.
Show that one can find a student in each school such that they are friends with each other.
