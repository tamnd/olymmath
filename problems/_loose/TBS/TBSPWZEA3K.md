---
tag: TBSPWZEA3K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h2965924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42047
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2022
    source: hf-ai-mo-aops
    label: 2022 Miklós Schweitzer
---
Original in Hungarian; translated with Google translate; polished by myself.

Prove that, the signs $\varepsilon_n = \pm 1$ can be chosen such that the function $f(s) = \sum_{n = 1}^\infty\frac{\varepsilon_n}{n^s}\colon \{s\in\Bbb C:\operatorname{Re}s > 1\}\to \Bbb C$ converges to every complex value at every point $\xi \in \{s\in\Bbb C:\operatorname{Re}s = 1\}$ (i.e. for every $\xi \in \{s\in\Bbb C:\operatorname{Re}s = 1\}$ and every $z \in \Bbb C$ , there exists a sequence $s_n \to \xi$ , $\operatorname{Re}s_n > 1$ , for which $f(s_n) \to z$ ).
