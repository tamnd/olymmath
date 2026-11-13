---
tag: MTPRASRMF8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Soit $a$, $b$, $c$, $n$ des entiers, avec $n \geq 2$. Soit $p$ un nombre premier qui divise $a^{2}+a b+b^{2}$ et $a^{n}+b^{n}+c^{n}$, mais qui ne divise pas $a+b+c$.
Prouver que $n$ et $p-1$ ne sont pas premiers entre eux.
