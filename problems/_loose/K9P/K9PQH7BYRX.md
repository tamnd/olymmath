---
tag: K9PQH7BYRX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h1709451
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31754
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Bosnia And Herzegovina - Regional Olympiad
---
Determine is there a function $a: \mathbb{N} \rightarrow \mathbb{N}$ such that: $i)$ $a(0)=0$ $ii)$ $a(n)=n-a(a(n))$ , $\forall n \in$ $ \mathbb{N}$ .
If exists prove: $a)$ $a(k)\geq a(k-1)$ $b)$ Does not exist positive integer $k$ such that $a(k-1)=a(k)=a(k+1)$ .
