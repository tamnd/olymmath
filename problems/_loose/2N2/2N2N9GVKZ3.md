---
tag: 2N2N9GVKZ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1983 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27914
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1983 Tournament Of Towns
---
Consider all nine-digit numbers, consisting of non-repeating digits from $1$ to $9$ in an arbitrary order. A pair of such numbers is called "conditional" if their sum is equal to $987654321$ .
(a) Prove that there exist at least two conditional pairs (noting that ( $a,b$ ) and ( $b,a$ ) is considered to be one pair).
(b) Prove that the number of conditional pairs is odd.

(G Galperin, Moscow)
