---
tag: F7KK4KF8JV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h590228
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66055
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
For integers $k$ and $n$ such that $1\le k<n$ , let $C^n_k=\frac{n!}{k!(n-k)!}$ . Then $\left(\frac{n-2k-1}{k+1}\right)C^n_k$ is an integer $\textbf{(A) }\text{for all }k\text{ and }n $ $\textbf{(B) }\text{for all even values of }k\text{ and }n,\text{ but not for all }k\text{ and }n $ $\textbf{(C) }\text{for all odd values of }k\text{ and }n,\text{ but not for all }k\text{ and }n $ $\textbf{(D) }\text{if }k=1\text{ or }n-1,\text{ but not for all odd values }k\text{ and }n $ $\textbf{(E) }\text{if }n\text{ is divisible by }k,\text{ but not for all even values }k\text{ and }n$
