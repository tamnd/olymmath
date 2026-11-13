---
tag: 4GA4KZT4CS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The cities of countries $A$ and $B$ are marked on the map, which has the form of a square with vertices at points $(0, 0)$ , $ (0, 1)$ , $(1, 1)$ , $(1, 0)$ of the plane. According to the trade agreement, country $A$ must ensure the delivery of $n$ kg of wheat to $n$ cities of country $B$, located at the points of the square with coordinates $y_1,..., y_n$, $1$ kg each city. Currently, $n$ kg of wheat are distributed among $n$ cities of country $A$, located at the points of the square with coordinates $x_1,... , x_n$, $1$ kg in each city. From each city of country $A$ to each city of the country $A$ any amount of wheat can be transported (of course, not more than $1$ kg). Transportation cost is for $t$ kg of wheat from a city with coordinates $x_i$ to a city with coordinates $y_j$ is equal to $tl_{ij}$, where $l_{ij }$is the length of the segment connecting the points $x_i$ and $y_j$. The government of country A is going to implement the optimal one (i,e. the cheapest) transportation plan.

(a) Is it possible to implement the optimal transportation plan so that from each city of country $A$ to transport wheat only to one city of country $B$?

(b) Will the response change if country $A$ is to deliver $n+1$ kg of wheat, in city $x_1$ is $2$ kg of wheat, and $2$ kg should be delivered to city $y_1$ (when for other cities the conditions remain the same)?
