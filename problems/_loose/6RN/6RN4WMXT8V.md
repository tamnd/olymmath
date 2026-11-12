---
tag: 6RN4WMXT8V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A Task from Wonderland. Lewis Carroll, a mathematician and famous children's writer, was the author of amusing absurdities. For example, he recommended using a map with a scale of 1:1, as it is enough to spread it on the ground to know where you are at any moment: one just needs to read the inscription where one is standing.

Imagine that, following this advice, we draw meridians and parallels on the Earth's surface with durable paint over land and sea, and place calligraphic names of cities, ports, and countries everywhere. The compass will become unnecessary, but one difficulty will still remain: how to find the shortest path to the chosen point. It is known that orthodromes, i.e., the shortest paths, are not loxodromes on Alice's map from Wonderland, i.e., lines that intersect meridians (and parallels) at a constant angle. Worse still, no rearrangement of coordinate lines will help us, as all coordinate systems will have this flaw. The Earth's sphere is to blame, of course, for being so impractical.

To fix our planet, it would be best to start with its map. For example, we can draw a rectangular grid of parallels and meridians and roll the map into a cylinder so that the parallels become circles. On such a cylindrical planet, the shortest path from one point to another always intersects the meridians at a constant angle. We can also cut the map along a parallel, marking a point $ N $ on it, and roll it into a cone with the vertex at point $ N $. On the conical planet, point $ N $ will be the true pole, parallels will not intersect, and meridians emanating from $ N $ will not intersect either, but each parallel will intersect each meridian at two points, just as on the Earth's sphere. And just as before, the shortest path will again have a constant direction.

But we can find an even more interesting model. On the map, there will be a rectangular grid of coordinate lines, but on the planet, only one family of lines will appear: each line will intersect any other line at two points, and also intersect itself at one point. The principle of constant direction will be preserved. What is this model?

When I told Master R. Novakowski about these two models, he immediately identified the third: the rectangular grid consists of meridians, parallels, and "mediators."
