---
tag: T74AGWAQ18
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h447007
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66530
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258002
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
For a finite sequence $A = (a_1, a_2,\ldots,a_n)$ of numbers, the *Cesaro sum* of $A$ is defined to be $$\frac{S_1 + S_2 + \cdots + S_n}{n}$$ where $S_k = a_1 + a_2 + \cdots + a_k\ \ \ \ (1 \le k \le n)$ . If the Cesaro sum of the 99-term sequence $(a_1, a_2, \ldots, a_{99})$ is $1000$ , what is the Cesaro sum of the 100-term sequence $(1,a_1,a_2,\ldots,a_{99})$ ? $ \textbf{(A)}\ 991 \textbf{(B)}\ 999 \textbf{(C)}\ 1000 \textbf{(D)}\ 1001 \textbf{(E)}\ 1009 $
