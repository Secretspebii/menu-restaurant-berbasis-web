// src/app/api/services/route.js
let servicesData = [
  {
    id: 1,
    name: "telur orek matasapi",
    description: "enak kali loh rasanya",
    harga: 20000,
    gambar: "/image/telur dadar.jpeg",
  },
  {
    id: 2,
    name: "telur orek kambing",
    description: "enak kali loh rasanya",
    harga: 25000,
  },
  {
    id: 3,
    name: "telur orek ayam",
    description: "enak kali loh rasanya",
    harga: 23000,
  },
  {
    id: 4,
    name: "telur orek sapi",
    description: "enak kali loh rasanya",
    harga: 30000,
  },
  {
    id: 5,
    name: "telur orek kerbau",
    description: "enak kali loh rasanya",
    harga: 25000,
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(servicesData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request) {
  const body = await request.json();
  const newService = {
    id: servicesData.length + 1,
    ...body,
  };
  servicesData.push(newService);

  return new Response(JSON.stringify(newService), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PUT(request) {
  const body = await request.json();
  const { id, name, description } = body;
  let updatedService = null;

  servicesData = servicesData.map((service) => {
    if (service.id === id) {
      updatedService = { ...service, name, description };
      return updatedService;
    }
    return service;
  });

  if (updatedService) {
    return new Response(JSON.stringify(updatedService), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ message: "Service not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function DELETE(request) {
  const body = await request.json();
  const { id } = body;
  const initialLength = servicesData.length;

  servicesData = servicesData.filter((service) => service.id !== id);

  if (servicesData.length < initialLength) {
    return new Response(JSON.stringify({ message: "Service deleted" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ message: "Service not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
