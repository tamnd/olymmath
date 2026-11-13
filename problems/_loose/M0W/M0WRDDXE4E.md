---
tag: M0WRDDXE4E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254484
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 62nd Ukrainian National Mathematical Olympiad
---
A *hedgehog* is a circle without its boundaries. The diameter of the hedgehog is the diameter of the corresponding circle. We say that the hedgehog sits at the at the point where the center of the circle is located.

We are given a triangle with sides $a, b, c$, with hedgehogs sitting at its vertices. It is known that inside the triangle there is a point from which you can reach any side of the triangle by walking along a straight line without hitting any hedgehog. What is the largest possible sum of the diameters of these hedgehogs?

*Proposed by Oleksiy Masalitin*
