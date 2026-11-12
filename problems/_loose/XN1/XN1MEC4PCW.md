---
tag: XN1MEC4PCW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Voor een getal van vijf cijfers $n = abcde$ definiëren we de verdraaide som van $n$ als de waarde

$$bcdea + cdeab + deabc + eabcd.$$

De verdraaide som van 20253 is bijvoorbeeld

$$05232 + 25320 + 53202 + 32025 = 113079.$$

Laat $m$ en $n$ twee vijfcijferige getallen zijn met dezelfde verdraaide som. Bewijs dat $m = n$.
