---
tag: PA8QWFYJYE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1673744
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32885
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2015
    source: hf-ai-mo-aops
    label: 2015 Olympic Revenge
---
Given $v = (a,b,c,d) \in \mathbb{N}^4$ , let $\Delta^{1} (v) = (|a-b|,|b-c|,|c-d|,|d-a|)$ and $\Delta^{k} (v) = \Delta(\Delta^{k-1} (v))$ for $k > 1$ . Define $f(v) = \min\{k \in \mathbb{N} : \Delta^k (v) = (0,0,0,0)\}$ and $\max(v) = \max\{a,b,c,d\}.$ Show that $f(v) < 1000\log \max(v)$ for all sufficiently large $v$ and $f(v) > 0.001 \log \max (v)$ for infinitely many $v$ .
