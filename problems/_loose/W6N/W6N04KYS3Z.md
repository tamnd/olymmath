---
tag: W6N04KYS3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mu$ and $\nu$ be two probability measures on the space $(E, \mathscr{E})$, where $\mathscr{E}$ is some $\sigma$-algebra of subsets of the set $E$. Suppose that for each $\delta>0$ there exists $E_{\delta} \in \mathscr{E}$ such that $\mu\left(E_{\delta}\right)<\delta$ and $\nu\left(\bar{E}_{\delta}\right)<\delta$. Prove that then there exists a set $D \in \mathscr{E}$ with $\nu$-measure zero such that

$$
\mu(B)=\mu(B D) \text { for all } B \in \mathscr{E} \text {. }
$$

Remark. The statement can be straightforwardly extended to arbitrary $\sigma$-finite measures $\mu$ and $\nu$.
