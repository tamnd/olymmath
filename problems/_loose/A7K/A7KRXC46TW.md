---
tag: A7KRXC46TW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four integers $a_{0}, b_{0}, c_{0}, d_{0}$ are written on a circle in the clockwise direction. In the first step, we replace $a_{0}, b_{0}, c_{0}, d_{0}$ by $a_{1}, b_{1}, c_{1}, d_{1}$, where $a_{1}=a_{0}-b_{0}, b_{1}=b_{0}-c_{0}, c_{1}=$ $c_{0}-d_{0}, d_{1}=d_{0}-a_{0}$. In the second step, we replace $a_{1}, b_{1}, c_{1}, d_{1}$ by $a_{2}, b_{2}, c_{2}, d_{2}$, where $a_{2}=a_{1}-b_{1}, b_{2}=b_{1}-c_{1}, c_{2}=c_{1}-d_{1}, d_{2}=d_{1}-a_{1}$. In general, at the $k$ th step, we have numbers $a_{k}, b_{k}, c_{k}, d_{k}$ on the circle where $a_{k}=a_{k-1}-b_{k-1}, b_{k}=$ $b_{k-1}-c_{k-1}, c_{k}=c_{k-1}-d_{k-1}, d_{k}=d_{k-1}-a_{k-1}$. After 1997 such replacements, we set $a=a_{1997}, b=b_{1997}, c=c_{1997}, d=d_{1997}$. Is it possible that all the numbers $|b c-a d|,|a c-b d|,|a b-c d|$ are primes ? Justify your answer.
