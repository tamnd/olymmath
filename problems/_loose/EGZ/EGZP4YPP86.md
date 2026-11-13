---
tag: EGZP4YPP86
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h457411
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3911
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206096
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2009
    source: hf-ai-mo-aops
    label: 2009 Olympic Revenge
---
Thin and Fat eat a pizza of $2n$ pieces. Each piece contains a distinct amount of olives between $1$ and $2n$ . Thin eats the first piece, and the two players alternately eat a piece neighbor of an eaten piece. However, neither Thin nor Fat like olives, so they will choose pieces that minimizes the total amount of olives they eat. For each arrangement $\sigma$ of the olives, let $s(\sigma)$ the minimal amount of olives that Thin can eat, considering that both play in the best way possible. Let $S(n)$ the maximum of $s(\sigma)$ , considering all arrangements. $a)$ Prove that $n^2-1+\lfloor \frac{n}{2} \rfloor \le S(n) \le n^2+\lfloor \frac{n}{2} \rfloor$ $b)$ Prove that $S(n)=n^2-1+\frac{n}{2}$ for each even n.
