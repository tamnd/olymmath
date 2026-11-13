---
tag: AHQVB0X35K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h589591
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66042
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199057
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
If $m,~n,~p,$ and $q$ are real numbers and $f(x)=mx+n$ and $g(x)=px+q$ , then the equation $f(g(x))=g(f(x))$ has a solution $\textbf{(A) }\text{for all choices of }m,~n,~p, \text{ and } q $ $\textbf{(B) }\text{if and only if }m=p\text{ and }n=q $ $\textbf{(C) }\text{if and only if }mq-np=0 $ $\textbf{(D) }\text{if and only if }n(1-p)-q(1-m)=0 $ $\textbf{(E) }\text{if and only if }(1-n)(1-p)-(1-q)(1-m)=0$
