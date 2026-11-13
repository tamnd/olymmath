---
tag: P32BCSJXHB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For matrices $A=[a_{ij}]_{m \times m}$ and $B=[b_{ij}]_{m \times m}$ where $A,B \in \mathbb{Z} ^{m \times m}$ let $A \equiv B \pmod{n}$ only if $a_{ij} \equiv b_{ij} \pmod{n}$ for every $i,j \in \{ 1,2,...,m \}$, that's $A-B=nZ$ for some $Z \in \mathbb{Z}^{m \times m}$. (The symbol $A \in \mathbb{Z} ^{m \times m}$ means that every element in $A$ is an integer.)
Prove that for $A \in \mathbb{Z} ^{m \times m}$ there is $B \in \mathbb{Z} ^{m \times m}$ , where $AB \equiv I \pmod{n }$ only if $(\det (A),n)=1$ and find the value of $B$ in the form of $A$ where $I$ represents the dimensional identity matrix $m \times m$.

*(PP-nine)*
