---
tag: Y8T5VKP36V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3272823
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1369
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2024
    source: hf-ai-mo-aops
    label: 2024 Abelkonkurransen Finale
---
Positive integers $a_0<a_1<\dots<a_n$ , are to be chosen so that $a_j-a_i$ is not a prime for any $i,j$ with $0 \le i <j \le n$ . For each $n \ge 1$ , determine the smallest possible value of $a_n$ .
