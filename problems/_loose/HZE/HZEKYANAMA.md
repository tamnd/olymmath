---
tag: HZEKYANAMA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exist infinitely many natural numbers $n$, for which there $\exists f:\{0,1…n-1\}\rightarrow \{0,1…n-1\}$, satisfying the following conditions:
1) $f(x)\neq x$;
2) $f(f(x))=x$;
3) $f(f(f(x+1)+1)+1)=x$ for $\forall x\in \{0,1…n-1\}$.
