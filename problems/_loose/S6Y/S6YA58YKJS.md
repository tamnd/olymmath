---
tag: S6YA58YKJS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h607676
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9692
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211686
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2013
    source: hf-ai-mo-aops
    label: 2013 Iran MO (3rd Round)
---
A polygon $A$ that doesn't intersect itself and has perimeter $p$ is called **Rotund** if for each two points $x,y$ on the sides of this polygon which their distance on the plane is less than $1$ their distance on the polygon is at most $\frac{p}{4}$ . (Distance on the polygon is the length of smaller path between two points on the polygon)
Now we shall prove that we can fit a circle with radius $\frac{1}{4}$ in any rotund polygon.
The mathematicians of two planets earth and Tarator have two different approaches to prove the statement. In both approaches by "inner chord" we mean a segment with both endpoints on the polygon, and "diagonal" is an inner chord with vertices of the polygon as the endpoints.**Earth approach: Maximal Chord**
We know the fact that for every polygon, there exists an inner chord $xy$ with a length of at most 1 such that for any inner chord $x'y'$ with length of at most 1 the distance on the polygon of $x,y$ is more than the distance on the polygon of $x',y'$ . This chord is called the **maximal chord**.
On the rotund polygon $A_0$ there's two different situations for maximal chord:
(a) Prove that if the length of the maximal chord is exactly $1$ , then a semicircle with diameter maximal chord fits completely inside $A_0$ , so we can fit a circle with radius $\frac{1}{4}$ in $A_0$ .
(b) Prove that if the length of the maximal chord is less than one we still can fit a circle with radius $\frac{1}{4}$ in $A_0$ .**Tarator approach: Triangulation**
Statement 1: For any polygon that the length of all sides is less than one and no circle with radius $\frac{1}{4}$ fits completely inside it, there exists a triangulation of it using diagonals such that no diagonal with length more than $1$ appears in the triangulation.
Statement 2: For any polygon that no circle with radius $\frac{1}{4}$ fits completely inside it, can be divided into triangles that their sides are inner chords with length of at most 1.
The mathematicians of planet Tarator proved that if the second statement is true, for each rotund polygon there exists a circle with radius $\frac{1}{4}$ that fits completely inside it.
(c) Prove that if the second statement is true, then for each rotund polygon there exists a circle with radius $\frac{1}{4}$ that fits completely inside it.
They found out that if the first statement is true then the second statement is also true, so they put a bounty of a doogh on proving the first statement. A young earth mathematician named J.N., found a counterexample for statement 1, thus receiving the bounty.
(d) Find a 1392-gon that is counterexample for statement 1.
But the Tarators are not disappointed and they are still trying to prove the second statement.
(e) (Extra points) Prove or disprove the second statement.

Time allowed for this problem was 150 minutes.
