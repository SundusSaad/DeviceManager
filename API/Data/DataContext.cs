using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<EmployeeUser> Users { get; set; } // dbSet is an array of objects of type AppUser now users become array of app users
        
        public DbSet<Device> Devices { get; set; } 
    }
}