---
tag: W1NX0TDTK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164291
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78553
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $p = 2017,$ a prime number. Let $N$ be the number of ordered triples $(a,b,c)$ of integers such that $1 \le a,b \le p(p-1)$ and $a^b-b^a=p \cdot c$ . Find the remainder when $N$ is divided by $1000000.$ *Proposed by Evan Chen and Ashwin Sah*

*Remark:* The problem was initially proposed for $p = 3,$ and $1 \le a, b \le 30.$
