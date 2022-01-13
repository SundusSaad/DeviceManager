using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class EmployeeController : BaseApiController
    {
        private readonly DataContext _context;
        public EmployeeController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeUser>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
    public class DeviceController : BaseApiController
    {
        private readonly DataContext _context;
        public DeviceController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Device>>> GetDevices()
        {
            return await _context.Devices.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Device>> GetDevice(int id)
        {
            return await _context.Devices.FindAsync(id);
        }
    }

    public class LoginController : BaseApiController
    {
        private readonly DataContext _context;
        public LoginController(DataContext context)
        {
            _context = context;
        }


        [HttpPost]
        public async Task<ActionResult<EmployeeUser>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);

            if (user == null) return Unauthorized ("Invalid username");

            return user;
        }
        
    }
}