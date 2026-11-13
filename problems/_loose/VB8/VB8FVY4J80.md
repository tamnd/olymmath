---
tag: VB8FVY4J80
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h375044
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39400
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1996
    source: hf-ai-mo-aops
    label: 1996 Bundeswettbewerb Mathematik
---
Define the sequence $(x_n)$ by $x_0 = 0$ and for all $n \in \mathbb N,$ $$x_n=\begin{cases} x_{n-1} + (3^r - 1)/2,&\text{ if } n = 3^{r-1}(3k + 1); x_{n-1} - (3^r + 1)/2, & \text{ if } n = 3^{r-1}(3k + 2).\end{cases}$$
where $k \in \mathbb N_0, r \in \mathbb N$ . Prove that every integer occurs in this sequence exactly once.
