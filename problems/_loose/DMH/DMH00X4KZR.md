---
tag: DMH00X4KZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that there exists an algorithm to verify, given an integer $n$ and a tuple $T$, whether $T$ is a Pratt certificate of $n$ in time $\mathcal{O}\left(\log (n)^{5}\right)$.

Obviously, if Pratt certificates have the dual advantage of being short and easy to verify, it is not at all evident to construct one. In particular, discussing the primality of $n$ requires here knowing how to factorize $n-1$. This seems inefficient, since we mentioned earlier that testing whether a number $n$ is prime is likely to be easier than factoring $n$.
