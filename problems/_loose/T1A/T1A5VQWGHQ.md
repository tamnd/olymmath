---
tag: T1A5VQWGHQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=294
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
Soit $ABCD$ un quadrilatère convexe dont les diagonales ne sont pas perpendiculaires et tel que les droites $(AB)$ et $(CD)$ ne sont pas parallèles. On note $O$ le point d'intersection de $[AC]$ et $[BD]$. Soit $H_1$ et $H_2$ les orthocentres respectifs des triangles $AOB$ et $COD$. On désigne par $M$ et $N$ les milieux respectifs de $[AB]$ et $[CD]$.

Prouver que les droites $(H_1 H_2)$ et $(MN)$ sont parallèles si et seulement si $AC = BD$.
