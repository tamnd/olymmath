---
tag: 3HFT3DYAGP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h590230
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66057
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199070
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
For a sequence $u_1,u_2\dots,$ define $\Delta^1(u_n)=u_{n+1}-u_n$ and, for all integer $k>1$ , $\Delta^k(u_n)=\Delta^1(\Delta^{k-1}(u_n))$ . If $u_n=n^3+n$ , then $\Delta^k(u_n)=0$ for all $n$ $\textbf{(A) }\text{if }k=1 $ $\textbf{(B) }\text{if }k=2,\text{ but not if }k=1 $ $\textbf{(C) }\text{if }k=3,\text{ but not if }k=2 $ $\textbf{(D) }\text{if }k=4,\text{ but not if }k=3 $ $\textbf{(E) }\text{for no value of }k$
