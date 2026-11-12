---
tag: QDDARM75Z9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a sphere of radius 1, a great circle has been drawn, which we will call the equator. It will be convenient for us to use other geographical terms: pole, meridian, parallel.

a) Let's define a function $f$ on this sphere that assigns to each point of the sphere the square of the distance from this point to the plane of the equator.

Check that this function has the following property:

(*) if $M_{1}, M_{2}, M_{3}$ are the endpoints of three mutually perpendicular radii of the sphere, then $f\left(M_{1}\right)+f\left(M_{2}\right)+f\left(M_{3}\right)=1$

In all the following parts, $f$ is an arbitrary non-negative function on the sphere that is zero at all points of the equator and has property $(*)$.

b) Let $M$ and $N$ be points on the same meridian, located between the North Pole and the equator. Prove that if point $M$ is farther from the plane of the equator than point $N$, then $f(M)>f(N)$.

c) Let $M$ and $N$ be arbitrary points on the sphere. Prove that if point $M$ is farther from the plane of the equator than $N$, then $f(M)>f(N)$.

d) Prove that if points $M$ and $N$ lie on the same parallel, then $f(M)=f(N)$.

e) Prove that the function $f$ coincides with the function described in part a).
