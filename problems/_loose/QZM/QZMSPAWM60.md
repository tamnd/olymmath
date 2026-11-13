---
tag: QZMSPAWM60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h590479
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66075
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199084
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
If $a_1,a_2,a_3,\dots$ is a sequence of positive numbers such that $a_{n+2}=a_na_{n+1}$ for all positive integers $n$ , then the sequence $a_1,a_2,a_3,\dots$ is a geometric progression $\textbf{(A) }\text{for all positive values of }a_1\text{ and }a_2 $ $\textbf{(B) }\text{if and only if }a_1=a_2 $ $\textbf{(C) }\text{if and only if }a_1=1 $ $\textbf{(D) }\text{if and only if }a_2=1 $ $\textbf{(E) }\text{if and only if }a_1=a_2=1$
