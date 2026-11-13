---
tag: DFP2HKP71W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h1238139
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12422
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2015
    source: hf-ai-mo-aops
    label: 2015 China Second Round Olympiad
---
Let $S=\{A_1,A_2,\ldots ,A_n\}$ , where $A_1,A_2,\ldots ,A_n$ are $n$ pairwise distinct finite sets $(n\ge 2)$ , such that for any $A_i,A_j\in S$ , $A_i\cup A_j\in S$ . If $k= \min_{1\le i\le n}|A_i|\ge 2$ , prove that there exist $x\in \bigcup_{i=1}^n A_i$ , such that $x$ is in at least $\frac{n}{k}$ of the sets $A_1,A_2,\ldots ,A_n$ (Here $|X|$ denotes the number of elements in finite set $X$ ).
