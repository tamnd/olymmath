---
tag: VJM4QX1V9F
kind: problem
type: answer
answer: No for n = 6; Yes for n = 7.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France PRÉPARATION OLYMPIQUE FRANÇAISE DE MATHÉMATIQUES
---
Soit $n \geqslant 1$ un entier strictement positif. Sur un mur, $n$ clous sont plantés. Chaque paire de clous est reliée par une corde coloriée à l'aide d'une des $n$ couleurs. On dit que le mur est coloré si pour tout triplet de couleurs deux à deux distinctes $a, b, c$, il existe trois clous tels que les trois cordes reliant ces clous soient de couleur $a, b$ et $c$.

- Existe-t-il un mur coloré pour $n=6$ ?
- Existe-t-il un mur coloré pour $n=7$ ?
