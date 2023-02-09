class Planets{
    constructor(name, image, distance, size, angle, ring) {
        this.name = name;
        this.image = image;
        this.distance = distance;
        this.size = size;
        this.angle = angle;
        this.ring = ring;
        };
    };
    
    let mercury = new Planets('Mercury', 'https://asset.kompas.com/data/photo/2021/02/08/60206a68cbd0b.jpg', 10, .4, 30);
    let venus = new Planets('Venus','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2115d5b9-b53e-4f1d-81e4-1d21461eeb45/dboveom-b62885be-788e-4ddd-8a02-59177f2eb0e5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxMTVkNWI5LWI1M2UtNGYxZC04MWU0LTFkMjE0NjFlZWI0NVwvZGJvdmVvbS1iNjI4ODViZS03ODhlLTRkZGQtOGEwMi01OTE3N2YyZWIwZTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ChSxR56yv0It1OBfFAPKq78PwFj35HG8PsyH34IxgBM', 20, 0.9, 70)
    let earth = new Planets('Earth', 'https://1.bp.blogspot.com/-UUXaK5GCj-k/UcsKJRMgkVI/AAAAAAAACfM/sePP_H08JTQ/s1600/1.jpg', 30, 0.95, 10);
    let mars = new Planets('Mars', 'https://media.istockphoto.com/id/488156684/photo/alien-planet-with-craters-4.jpg?s=612x612&w=0&k=20&c=Yi8aOsN6UWT2yqzTqJ_z9qwymTKIGyFNUXsBJkjVPNk=', 40, 0.5, 30);
    let jupiter = new Planets('Jupiter', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02WDv10yGUOx7DkTENX01Yx_FZjThiL_Cig&usqp=CAU', 60, 2, 120);
    let saturn = new Planets('Saturn', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5938ae9e-47de-424a-8836-f98e6658d37b/dczarq1-7425c8ac-887d-4ac8-befc-559b63e3f988.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MzhhZTllLTQ3ZGUtNDI0YS04ODM2LWY5OGU2NjU4ZDM3YlwvZGN6YXJxMS03NDI1YzhhYy04ODdkLTRhYzgtYmVmYy01NTliNjNlM2Y5ODgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.elzEWEQkDV0hZur452C3X-cpaE3CjxjwFdUL5EbFSjw', 85, 2, 180);
    let uranus = new Planets('Uranus', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1912b050-3675-4394-a3d1-d0b4cb43ae0a/dc18wwb-e195cd81-efbd-480a-9f51-5100a530683d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5MTJiMDUwLTM2NzUtNDM5NC1hM2QxLWQwYjRjYjQzYWUwYVwvZGMxOHd3Yi1lMTk1Y2Q4MS1lZmJkLTQ4MGEtOWY1MS01MTAwYTUzMDY4M2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SL33h8GpzTu_M-WWzxQjyw0osVvDZ-NlEKmLkRLzZA8', 95, .4, 220);
    let neptune = new Planets('Neptune', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2115d5b9-b53e-4f1d-81e4-1d21461eeb45/dbozsk6-f27239ad-b102-465b-a86a-7a9a1c36502f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxMTVkNWI5LWI1M2UtNGYxZC04MWU0LTFkMjE0NjFlZWI0NVwvZGJvenNrNi1mMjcyMzlhZC1iMTAyLTQ2NWItYTg2YS03YTlhMWMzNjUwMmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hcob9AgnIicA9QhBReA7YEd85vdtbLhgWNSveigO5UI', 105, .4, 150);